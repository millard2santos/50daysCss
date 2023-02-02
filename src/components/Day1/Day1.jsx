import { useState } from 'react'
import './Day1.css'

const Day1 = () => {
    const [rotate, setRotate] = useState('')
    const [circleRotate, setCircleRotate] = useState('')
    const [slide, setSlide] = useState('')

    console.log(rotate);

    const barsHandle = () => {
        setRotate('rotate')
        setCircleRotate('circleRotate')
        setSlide('slide')
    }
    const xHandle = () => {
        setRotate('')
        setCircleRotate('')
        setSlide('')
    }



    return (
        <>
            <div className='world'>
                <div className={`circle ${circleRotate}`}>
                    <i onClick={xHandle} className="fa-regular fa-x icon"></i>
                    <i onClick={barsHandle} className="fa-solid fa-bars icon"></i>
                </div>
                <div className={`container ${rotate}`}>
                    <h1>Amazing Article</h1>
                    <p>Florin Pop</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>
                    <h2>My Dog</h2>
                    <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate!</p>
                </div>
                <p className={`hide ${slide}`}>HOME</p>
                <p className={`hide ${slide}`}>ABOUT</p>
                <p className={`hide ${slide}`}>CONTACT</p>


            </div>
        </>
    )
}

export default Day1