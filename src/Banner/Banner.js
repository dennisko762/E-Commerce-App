/** @jsx jsx */


import React, { useState, useEffect, useRef } from 'react'
import './Banner.css'
import Slide from '../Slide/Slide'
import { css, jsx } from '@emotion/react'
import SliderContent from '../SliderContent/SliderContent'
import Arrow from '../Arrow/Arrow'
function Banner(props) {


    const { slides } = props
    console.log(slides)

    const getWidth = () => window.innerWidth







    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]

    const [state, setState] = useState({
        activeSlide: 0,
        translate: getWidth(),
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide]
    })

    const { activeSlide, translate, _slides, transition } = state

    const autoPlayRef = useRef()
    const transitionRef = useRef()
    const resizeRef = useRef()
    const sliderRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
        resizeRef.current = handleResize
    })

    useEffect(() => {
        const slider = sliderRef.current

        const play = () => {
            autoPlayRef.current()
        }

        const smooth = e => {
            if (e.target.className.includes('SliderContent')) {
                transitionRef.current()
            }
        }

        const resize = () => {
            resizeRef.current()
        }

        const transitionEnd = slider.addEventListener('transitionend', smooth)
        const onResize = window.addEventListener('resize', resize)

        let interval = null

        if (slides.autoPlay) {
            interval = setInterval(play, slides.autoPlay * 1000)
        }

        return () => {
            slider.removeEventListener('transitionend', transitionEnd)
            window.removeEventListener('resize', onResize)

            if (slides.autoPlay) {
                clearInterval(interval)
            }
        }
    }, [])

    useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 0.45 })
    }, [transition])

    const handleResize = () => {
        setState({ ...state, translate: getWidth(), transition: 0 })
    }

    const smoothTransition = () => {
        let _slides = []

        // We're at the last slide.
        if (activeSlide === slides.length - 1)
            _slides = [slides[slides.length - 2], lastSlide, firstSlide]
        // We're back at the first slide. Just reset to how it was on initial render
        else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
        // Create an array of the previous last slide, and the next two slides that follow it.
        else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

        setState({
            ...state,
            _slides,
            transition: 0,
            translate: getWidth()
        })
    }

    const nextSlide = () =>
        setState({
            ...state,
            translate: translate + getWidth(),
            activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
        })

    const prevSlide = () =>
        setState({
            ...state,
            translate: 0,
            activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
        })
    return (
        // <div className="banner">

        //     <a className="prev" type="submit">
        //         &#10094;
        // </a>
        //     <a className="next" type="submit">
        //         &#10095;
        // </a>
        //     <Slide></Slide>






        // </div>
        <div css={SliderCSS} ref={sliderRef}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * _slides.length}
            >
                {_slides.map((_slide, i) => (
                    <Slide width={getWidth()} key={_slide + i} content={_slide} />

                ))}
            </SliderContent>

            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />

            {/*    <Dots slides={slides} activeSlide={activeSlide} /> */}
        </div>






    )
}
const SliderCSS = css`
position: absolute;
height: 55vh;
width: 100vw;
margin: 0 auto;
overflow: hidden;
white-space: nowrap;
`


export default Banner
