package com.example.MealsOnWheels.AccessingDataMySQL.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(value = {ApiRequestException.class})
    public ResponseEntity<Object> handleApiRequestException(ApiRequestException e, WebRequest webRequest) {
        HttpStatus badRequest = HttpStatus.BAD_REQUEST;
        int badRequestValue = HttpStatus.BAD_REQUEST.value();
        ApiException apiException = new ApiException(e.getMessage(), badRequestValue, badRequest, ZonedDateTime.now(ZoneId.of("Z")),
                webRequest.getDescription(false));
        return new ResponseEntity<>(apiException, badRequest);
    }

    @ExceptionHandler(value = {ResourceNotFound.class})
    public ResponseEntity<Object> handleApiRequestException(ResourceNotFound e, WebRequest webRequest) {
        HttpStatus notFound = HttpStatus.NOT_FOUND;
        int notFoundValue = HttpStatus.NOT_FOUND.value();
        ApiException apiException = new ApiException(e.getMessage(), notFoundValue, notFound, ZonedDateTime.now(ZoneId.of("Z")),
                webRequest.getDescription(false));
        return new ResponseEntity<>(apiException, notFound);
    }

    @ExceptionHandler(value = {Exception.class})
    public ResponseEntity<Object> handleGlobalException(Exception e, WebRequest webRequest) {
        HttpStatus internalServerIssue = HttpStatus.INTERNAL_SERVER_ERROR;
        int internalServerIssueValue = HttpStatus.INTERNAL_SERVER_ERROR.value();
        ApiException apiException = new ApiException(e.getMessage(), internalServerIssueValue, internalServerIssue,
                ZonedDateTime.now(ZoneId.of("Z")), webRequest.getDescription(false));
        return new ResponseEntity<>(apiException, internalServerIssue);
    }
}
