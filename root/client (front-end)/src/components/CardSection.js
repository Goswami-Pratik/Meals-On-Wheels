import React from 'react'
import Card from './Card'

function CardSection() {
    return (
        <div className="cardSection">
            <Card
            title = 'Riders'
            imageUrl= 'https://images.pexels.com/photos/4604663/pexels-photo-4604663.jpeg?cs=srgb&dl=pexels-cottonbro-4604663.jpg&fm=jpg'
            body = 'Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts.'
            button = "become a rider"
            />
            <Card
             title = 'Restaraunts'
             imageUrl= 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
             body = 'Partner with Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food.'
             button = "Partner with us"
            />
            <Card
             title = 'Careers'
             imageUrl= 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80'
             body = "Our mission is to change the way people eat. It's ambitiou, but so are we. And we need people like you to help us do it."
             button = "learn more"
            />
        </div>
    )
}

export default CardSection
