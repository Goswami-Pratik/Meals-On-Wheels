package com.example.MealsOnWheels.AccessingDataMySQL.security.config;

import com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserServices;
import com.example.MealsOnWheels.AccessingDataMySQL.jwt.JwtConfig;
import com.example.MealsOnWheels.AccessingDataMySQL.jwt.JwtTokenVerifier;
import com.example.MealsOnWheels.AccessingDataMySQL.jwt.JwtUsernameAndPasswordAuthenticationFilter;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.crypto.SecretKey;

import java.util.Arrays;

import static com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserPermission.*;
import static com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserRoles.*;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserServices userServices;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JwtConfig jwtConfig;
    private final SecretKey secretKey;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //Completed - Config antmatcher to allow permissions based on role. Also enable csrf later during production.
        //Ensure to take X-CSRF-TOKEN.
        http
//                .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//                .and()
                .cors()
                .and()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(new JwtUsernameAndPasswordAuthenticationFilter(authenticationManager(), jwtConfig, secretKey))
                .addFilterAfter(new JwtTokenVerifier(jwtConfig, secretKey), JwtUsernameAndPasswordAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers("/api/v1/signup/**").permitAll()
                .antMatchers("/api/donation/createForm").permitAll()
                .antMatchers("/api/moneyDonation/addDonation").permitAll()
                .antMatchers("/api/restaurantes/**").permitAll()
                .antMatchers("/api/review/**").permitAll()
                .antMatchers("/api/**").hasAnyRole(USER.name(), ADMIN.name())
                .antMatchers(HttpMethod.GET, "/api/**").hasAnyAuthority(USER_READ.getPermission())
                .antMatchers(HttpMethod.PUT, "/api/**").hasAnyAuthority(USER_WRITE.getPermission())
                .antMatchers(HttpMethod.GET, "/management/api/**").hasAnyAuthority(ADMIN_WRITE.getPermission())
                .antMatchers(HttpMethod.POST, "/management/api/**").hasAnyAuthority(ADMIN_WRITE.getPermission())
                .antMatchers(HttpMethod.DELETE, "/management/api/**").hasAnyAuthority(ADMIN_WRITE.getPermission())
                .antMatchers(HttpMethod.PUT, "/management/api/**").hasAnyAuthority(ADMIN_WRITE.getPermission())
                .antMatchers("/management/api/**").hasRole(ADMIN.name())
                .anyRequest()
                .authenticated();

//-----FOR FORM BASED AUTH( NO LONGER NEEDED )-----//
//                .and()
//                .formLogin()
//                    .loginPage("/login").permitAll()
//                    .defaultSuccessUrl("/menu", true)
//                    .usernameParameter("username")
//                    .passwordParameter("password")
//                .and()
//                .rememberMe()
//                    .rememberMeParameter("remember-me")
//                .and()
//                .logout()
//                    .logoutUrl("/logout")
//                    .logoutRequestMatcher(new AntPathRequestMatcher("/logout", "GET"))
//                // disable if csrf enabled and implement post method for it ref : https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/web/server/ServerHttpSecurity.LogoutSpec.html
//                    .clearAuthentication(true)
//                    .invalidateHttpSession(true)
//                    .deleteCookies("JSESSIONID", "remember-me")
//                    .logoutSuccessUrl("/login");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(userServices);
        return provider;
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
}
