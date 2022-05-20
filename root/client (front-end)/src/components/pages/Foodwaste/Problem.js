import React from 'react';
import '../../../styles/pages/Problem.css';
import { Divider } from '@material-ui/core';
import problemsIMG1 from '../../../img/problemsIMG.jpg';
import problemsIMG2 from '../../../img/problemsIMG2.jpg';
import problemsIMG3 from '../../../img/problemsIMG3.jpg';
import problemsIMG4 from '../../../img/problemsIMG4.png';
import Footer from "../../Footer";

function Problem() {
    return (
        <div className='problemPage'>
            <h1 className='titleLine'>Food waste and hunger in the UK</h1>
            <p className='intro'>Hundreds of thousands of tonnes of good food is wasted by the UK food industry every year. At the same time,
                millions of people are struggling to afford to eat. Our work addresses these two issues by redistributing food,
                which would otherwise go to waste, to the people who need it most. Find facts and figures on food waste and hunger in the UK below.
                Our project aims to fight against hunger and to tackle food waste by delivering meals to individuals at home who are unable to purchase or prepare their own meals.
            </p>
            <Divider id='pageDivider'/>
            {/*-----------Fact1---------*/}
            <div className='fact1'>
                <div className='factcolumns left'>
                    <img className='fact1-left-img' src={problemsIMG1}></img>
                </div>
                <div className='factcolumns middle'>
                    <p className='fact1-middle-title'>8.4 million people in the UK are struggling to afford to eat</p>
                    <p className='fact1-middle-info'>This is equivalent to the entire population of London</p>
                </div>
                <div className='factcolumns right'>
                    <p className='fact1-right-title'>Hunger in the UK</p>
                    <p className='fact1-right-info'>4.7 million of these people live in severely food insecure homes.
                        This means that their food intake is greatly reduced and children regularly experience physical sensations of hunger.</p>
                    <p className='fact1-right-info'>UN figures also show that 5.6% of people aged 15 or over struggle
                        to get enough food. A further 4.5% report that they have been a full day without anything to eat.</p>
                    <p className='fact1-right-info'>All the world’s nearly one billion hungry people could be fed on less than a quarter of the food that is
                        wasted in the US, UK and Europe. <a href="http://feedbackglobal.org/food-waste-scandal/">Ref</a></p>
                </div>
            </div>
            <Divider id='pageDivider'/>
            {/*-----------Fact2---------*/}
            <div className='fact2'>
                <div className='factcolumns left'>
                    <img className='fact2-left-img' src={problemsIMG2}></img>
                </div>
                <div className='factcolumns middle'>
                    <p className='fact2-middle-title'>1.9 million tonnes of food is wasted by the food industry every year in the UK</p>
                </div>
                <div className='factcolumns right'>
                    <p className='fact2-right-title'>Food waste in the food industry</p>
                    <p className='fact2-right-info'>By “food industry” we mean all businesses involved in the supply of
                        food. It includes everyone from farmers and growers to manufacturers and processors to wholesalers,
                        retailers and food service companies.</p>
                    <p className='fact2-right-info'>An area larger than China is used to grow food that is never eaten. <a
                        href="http://www.fao.org/fileadmin/templates/nr/sustainability_pathways/docs/Factsheet_FOOD-WASTAGE.pdf">Ref</a></p>
                    <p className='fact2-right-info'>Reducing food waste is the #1 solution to the climate crisis,
                        according to Project DrawDown – coming above electric cars, solar power and plant-based diets. <a
                            href="https://drawdown.org/">Ref</a></p>
                </div>
            </div>
            <Divider id='pageDivider'/>
            {/*-----------Fact3---------*/}
            <div className='fact3'>
                <div className='factcolumns left'>
                    <img className='fact3-left-img' src={problemsIMG3}></img>
                </div>
                <div className='factcolumns middle'>
                    <p className='fact3-middle-title'>910,000 tonnes of food wasted in London every year alone</p>
                </div>
                <div className='factcolumns right'>
                    <p className='fact3-right-title'>Waste Analysis</p>
                    <p className='fact3-right-info'>
                        <b>Everyday waste:</b>
                        <ul>
                            <li><strong>Bread:</strong> 2,600,000 slices every single day! </li>
                            <li><strong>Potato:</strong> 560,000 every day </li>
                            <li><strong>Chicken:</strong> 140,000 every day </li>
                            <li><strong>Milk:</strong> 270,000 pints every day </li>
                        </ul>
                        <b>Waste by sector:</b>
                        <ul>
                            <li><strong>Farms:</strong> 100,000-500,000 tonnes </li>
                            <li><strong>Processing and manufacturing:</strong> 52,000-160,000 tonnes </li>
                            <li><strong>Wholesale and distribution:</strong> 80,000-120,000 tonnes </li>
                            <li><strong>Retail:</strong> 47,000-110,000 tonnes </li>
                        </ul>
                    </p>
                    <p className='fact3-right-info'>The annual value of food wasted globally is $1 trillion - it weighs
                        1.3 billion tonnes. <a
                            href="http://news.nationalgeographic.com/news/2015/01/150122-food-waste-climate-change-hunger/">Ref</a></p>
                </div>
            </div>
            <Divider id='pageDivider'/>
            {/*-----------Fact4---------*/}
            <div className='fact4'>
                <div className='factcolumns left'>
                    <img className='fact4-left-img' src={problemsIMG4}></img>
                </div>
                <div className='factcolumns middle'>
                    <p className='fact4-middle-title'>The waste hierarchy calls for food to feed people first</p>
                    <p className='fact4-middle-info'>It is a legal requirement for UK companies to operate according to these principles</p>
                </div>
                <div className='factcolumns right'>
                    <p className='fact4-right-title'>Feed people first</p>
                    <p className='fact4-right-info'>The <a style={{color : '#ffd300'}}
                        href="http://www.wrap.org.uk/content/why-take-action-legalpolicy-case"> waste hierarchy </a> sets
                        out five steps for dealing with waste, ranked according to their environmental impact. It states that
                        surplus food should be used to feed people first before it is sent to animal feed or energy.</p>
                </div>
            </div>
            <span/>
            <Footer/>
        </div>
    )
}

export default Problem;
