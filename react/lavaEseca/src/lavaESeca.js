import React, {Component} from 'react';
import { CardProdutoVitrine } from "brastemp.components";
import { Query } from 'react-apollo';
import ProductShowcaseQuery from './produto.gql'
import ProductShowcaseQuery2 from './produto2.gql'

// Libs
import Slider from "react-slick";
import StickyBox from "react-sticky-box";

// Components
import properties from '../public/props.json'
import Headline from './components/Headline'
import HeadlineB from './components/HeadlineB' 
import Sections from './components/Section'
import Menu from './components/Menu'
import Button from './components/Button'
import SeeMore from './components/SeeMore'
import Modal from './components/Modal'
import ModalCompareImage from './components/ModalCompareImage'
import ModalTypeStainList from './components/ModalTypeStainList'
import Video from './components/Video'
import BoxProdutoVitrine from './components/BoxProdutoVitrine'

// Modal
import ButtonOutline from './components/ButtonOutlineRounded'

// Assets
import './lava-e-seca.global.css';

// Images
import introBannerSmall from '../imgs/intro-banner-360.png';
import introBannerMedium from '../imgs/intro-banner-720.png';
import introBannerLarge from '../imgs/intro-banner-1060.png'; 

import detalhesPainelTouchSmall from '../imgs/detalhes-painel_touch-360.png'; 
import detalhesPainelTouchLarge from '../imgs/detalhes-painel_touch-994.png';
import detalhesPainelTouchXlarge from '../imgs/detalhes-painel_touch-1492.png';


import detalhesLindoDesignGraySmall from '../imgs/detalhes-lindo_design_gray-307.png';
import detalhesLindoDesignGrayMedium from '../imgs/detalhes-lindo_design_gray-614.png';
import detalhesLindoDesignGrayLarge from '../imgs/detalhes-lindo_design_gray-852.png'; 
import detalhesLindoDesignGrayXlarge from '../imgs/detalhes-lindo_design_gray-1704.png';

import detalhesLindoDesignWhiteSmall from '../imgs/detalhes-lindo_design_white-307.png';
import detalhesLindoDesignWhiteMedium from '../imgs/detalhes-lindo_design_white-614.png';
import detalhesLindoDesignWhiteLarge from '../imgs/detalhes-lindo_design_white-852.png';
import detalhesLindoDesignWhiteXlarge from '../imgs/detalhes-lindo_design_white-1704.png';

import detalhesCestoInoxSmall from '../imgs/detalhes-cesto_inox-333.png';
import detalhesCestoInoxMedium from '../imgs/detalhes-cesto_inox-666.png';
import detalhesCestoInoxLarge from '../imgs/detalhes-cesto_inox-931.png'; 
import detalhesCestoInoxXlarge from '../imgs/detalhes-cesto_inox-1862.png';

import funcaVoltoLogoSmall from '../imgs/funca-volto-logo-322.png';
import funcaVoltoLogoMedium from '../imgs/funca-volto-logo-644.png';

import cicloEdredomSmall from '../imgs/ciclo-edredon-322.png';
import cicloEdredomMedium from '../imgs/ciclo-edredon-644.png';
import cicloEdredomLarge from '../imgs/ciclo-edredon-1178.png';

import cicloTiraManchasCoverMid from '../imgs/ciclo-tira-manchas__cover_mid.png';
import cicloTiraManchasFeaturedImageCanetinha from '../imgs/tira-manchas__featured-canetinha_mid.png';
import cicloTiraManchasFeaturedImageGordura from '../imgs/tira-manchas__featured-gordura_mid.png';

// const cicloTiraManchasCoverMid = "https://res.cloudinary.com/dins1gjdy/image/upload/v1575296961/whirlpool/ciclo-tira-manchas__cover_mid_rtkb1e.png"
// const cicloTiraManchasFeaturedImageCanetinha = 'https://res.cloudinary.com/dins1gjdy/image/upload/v1575242021/whirlpool/tira-manchas__featured-canetinha_mid_jfe42z.png';
// const cicloTiraManchasFeaturedImageGordura = 'https://res.cloudinary.com/dins1gjdy/image/upload/v1575242031/whirlpool/tira-manchas__featured-gordura_mid_rrzeah.png';

import cicloUmaHoraFeaturedImageCoverMid from '../imgs/ciclo-uma-hora__cover_mid.png';

class lavaESeca extends React.Component {

	// replaceImageURI() {
    //     document.querySelectorAll('img')
    //         .forEach(img => {
	// 			let src = img.getAttribute('src').replace('/_v/public/', '/_v/private/').replace('published', 'linked');
	// 			let srcset = img.currentSrc.replace('/_v/public/', '/_v/private/').replace('published', 'linked');
	// 			img.setAttribute('src', src);
	// 			img.setAttribute('srcset', srcset);
	// 		});
	// }
	
	state = { currentSrc: '' };

	onLoad = (event) => {
		this.setState({
		currentSrc: event.target.currentSrc
		});
	}

	constructor() {
		super();
		this.state = {
		   menuStiky: 'show'
		}
	}


	componentDidMount() {
		window.onscroll = () => this.handleScroll();
		//this.replaceImageURI();
	}

	handleScroll() {
	   	if (document.documentElement.scrollTop > 595) {
		  this.setState({
			menuStiky: 'hidden',
		  })
		} 
		else{
			this.setState({
				menuStiky: 'show'
			})
		  } 
	  }
		  
	render() { 

		const settings = {
			dots: false,
			arrow: true,
			infinite: false,
			slidesToShow: 1,
			afterChange: function(index) {
				document.getElementById("sliderNumber").innerHTML = index + 1;
				if(index == 0)
					console.log("Painel Full Touch2");
				if(index == 1)
					console.log("Design sofisticado");
				if(index == 2)
					console.log("Cesto Inox");
			  }
		};
		const settingsTwo = {
			dots: false,
			arrow: true,
			fade: true,
			infinite: false,
			slidesToShow: 1,
			afterChange: function(index) {
				document.getElementById("sliderNumber").innerHTML = index + 1;
				if(index == 0)
				console.log("Cor Prata");
				if(index == 1)
				console.log("Cor Branca");
			  }
		};

		const settingsThree = {
			dots: true,
			arrow: false,
			infinite: false,
			slidesToShow: 2,
			//slidesToShow: 1,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						arrow: false,
						dots: true,
						autoplay: false,
						infinite: true,
					}
				}
			]
		};

		return (
			<div className="lava-e-seca">
				<Sections id="intro" ref={ (divElement) => { this.divElement = divElement } } setClass="intro animation"> 
					<div className="container">
						<div className="page-title">
							<h2 className="subtitle-h2">{properties.sections.intro.subtitle}</h2>
							<h1 className="title-h1">{properties.sections.intro.title}</h1>
							<p className="description">{properties.sections.intro.description}</p>
							<SeeMore link="#detalhes" label="Saiba mais"/>
						</div>
					</div>
						<picture>
							<img 
								alt={properties.sections.intro.title}  
								src={introBannerSmall} 
								srcSet={`
									${introBannerSmall} 360w, 
									${introBannerMedium} 720w, 
									${introBannerLarge} 1060w
								`} 
								onLoad={this.onLoad} />
						</picture>
				</Sections>
				<StickyBox className={`menu-sticky ${this.state.menuStiky}`}>
					<Menu  />
				</StickyBox>
				<Sections id="detalhes" setClass="section">
					<div className="detalhes">
						<div className="container">
							<h3 className="title-h3">{properties.sections.detalhes.title}</h3>
							<div className="slider-counter"><span id="sliderNumber">1</span> / 3</div>
						</div>
						<Slider className="slider-detalhes " {...settings}>
							<div>
								<div className="slider-detalhes__slide">
									<Headline 
										title={properties.sections.detalhes.headline[0].title}
										subtitle={properties.sections.detalhes.headline[0].subtitle}
									></Headline>
									<div>
										<img 
										alt={properties.intro_full_touch}  
										src={detalhesPainelTouchSmall} 
										srcSet={`
											${detalhesPainelTouchSmall} 360w, 
											${detalhesPainelTouchLarge} 994w,
											${detalhesPainelTouchXlarge} 1492w
										`} 
										onLoad={this.onLoad} />
									</div>
								</div>
							</div>
							<div>
								<div className="slider-detalhes__slide">
									<Headline 
										title={properties.sections.detalhes.headline[1].title}
										subtitle={properties.sections.detalhes.headline[1].subtitle}
									></Headline>
									<div>
										<Slider className="slider-lindo" {...settingsTwo}>
											<div>
												<div className="slider-lindo__slide">
													<img 
													alt={properties.intro_full_touch}  
													src={detalhesLindoDesignGraySmall} 
													srcSet={`
														${detalhesLindoDesignGraySmall} 306w, 
														${detalhesLindoDesignGrayMedium} 614w,
														${detalhesLindoDesignGrayLarge} 852w, 
														${detalhesLindoDesignGrayXlarge} 1704w
													`} 
													onLoad={this.onLoad} />
												</div>
											</div>
											<div>
												<div className="slider-lindo__slide">
													<img 
													alt={properties.intro_full_touch}  
													src={detalhesLindoDesignWhiteSmall} 
													srcSet={`
														${detalhesLindoDesignWhiteSmall} 306w, 
														${detalhesLindoDesignWhiteMedium} 614w,
														${detalhesLindoDesignWhiteLarge} 852w, 
														${detalhesLindoDesignWhiteXlarge} 1704w
													`} 
													onLoad={this.onLoad} />
												</div>
											</div>
										</Slider>
									</div>
								</div>
							</div>
							<div>
								<div className="slider-detalhes__slide">
									<Headline 
										title={properties.sections.detalhes.headline[2].title}
										subtitle={properties.sections.detalhes.headline[2].subtitle}
									></Headline>
									<div>
										<img 
											className="detalhes-cesto_inox"
											alt={properties.intro_full_touch}  
											src={detalhesCestoInoxSmall} 
											srcSet={`
												${detalhesCestoInoxSmall} 333w, 
												${detalhesCestoInoxMedium} 666w,
												${detalhesCestoInoxLarge} 931w,
												${detalhesCestoInoxXlarge} 1862w
											`} 
											onLoad={this.onLoad} />
									</div>
								</div>
							</div>
						</Slider>
						</div>
				</Sections>

				<Sections id="diferenciais" setClass="diferencias  section">

					<div className="diferencias__frame-bg"></div>
					<div className="diferencias__still-bg"></div>

					<div className="container">

						<hgroup className="section-page__heading  centered">
							<h3 className="title-h3">{properties.sections.diferenciais.title}</h3> 
						</hgroup>

						<article className="section-page__featured">
							<div className="section-page__featured_cover"></div>
							<div className="section-page__featured_content">

								<div className="featured__heading  my-default">
									<Headline 
										title={properties.sections.diferenciais.headline.title}
										subtitle={properties.sections.diferenciais.headline.subtitle}
										paragraphDefault={properties.sections.diferenciais.headline.paragraph.default}						
									>
									</Headline>			
								</div>

								<div className="featured__call-to-action  my-default">
									<Button link="#" label="Compare"></Button>
								</div>
							</div>
						</article>

					</div>
				</Sections>

				<Sections id="ciclo-tira-manchas" setClass="ciclo-tira-manchas  section">

					<div className="container">

						<hgroup className="section-page__heading  centered  invisible">
							<h3 className="title-h3">{properties.sections.ciclo_tira_mancha.title}</h3> 
						</hgroup>

						<article className="section-page__featured">
							<div className="section-page__featured_cover"></div>
							<div className="section-page__featured_content">

								<div className="featured__heading">
									<HeadlineB 
										title={properties.sections.ciclo_tira_mancha.headline.title}
										subtitle={properties.sections.ciclo_tira_mancha.headline.subtitle}
										paragraphDefault={properties.sections.ciclo_tira_mancha.headline.paragraph.default}
										position="is-above"
										noticeParagraphList={properties.sections.ciclo_tira_mancha.headline.notice.default.paragraph}
																
									>
									</HeadlineB>			
								</div>

								<div className="featured_cover  my-default">
									<picture className="featured_cover__image-container  border">
										<img className="featured__image" src={cicloTiraManchasCoverMid}  title=""/>
									</picture>
								</div>

								<div className="featured__heading  is-notice-below">
									<HeadlineB 
										// title={properties.sections.ciclo_tira_mancha.headline.title}
										// subtitle={properties.sections.ciclo_tira_mancha.headline.subtitle}
										// paragraphDefault={properties.sections.ciclo_tira_mancha.headline.paragraph.default}
										position="is-below"
										noticeParagraphList={properties.sections.ciclo_tira_mancha.headline.notice.default.paragraph}
																
									>
									</HeadlineB>			
								</div>

								<div className="featured__call-to-action  my-default">
									<Button link="#" label="Saiba mais"></Button>
								</div>

								<aside className="featured__thumbnail  my-default">

									<h4 className="title-h4  centered">Inclusive aquelas manchas mais dificeis...</h4>

									<figure className="featured__image-figure">
										<picture className="featured__image-container  border">
											<img className="featured__image" src={cicloTiraManchasFeaturedImageCanetinha} title="imagem mancha de canetinha"/> 
											<source media="" type="image/jpeg"></source>
										</picture>
										<figcaption className="featured__image-caption">Canetinha</figcaption>
									</figure>

									<figure className="featured__image-figure">
										<picture className="featured__image-container  border">
											<img className="featured__image" src={cicloTiraManchasFeaturedImageGordura}  title="imagem mancha de gordura"/> 
											<source  media="" type="image/jpeg"></source>
										</picture>
										<figcaption className="featured__image-caption">Gordura</figcaption>
									</figure>
								</aside>

								<Slider className="slider  my-default">

									<picture className="featured__image-container  px-default  border">
										<img src={cicloTiraManchasFeaturedImageCanetinha}  title="imagem mancha de canetinha"/> 
										<source  media="" type="image/jpeg"></source>
									</picture>

									<picture className="featured__image-container  border">
										<img src={cicloTiraManchasFeaturedImageGordura}  title="imagem mancha de gordura"/> 
										<source  media="" type="image/jpeg"></source>
									</picture>

								</Slider>
							</div>
						</article>

					</div>
				</Sections>
				
				<Sections id="ciclo-uma-hora" setClass="ciclo-uma-hora  section">

					<div className="container">

						<hgroup className="section-page__heading  centered  invisible">
							<h3 className="title-h3">{properties.sections.ciclo_tira_mancha.title}</h3> 
						</hgroup>

						<article className="section-page__featured">
							<div className="section-page__featured_cover">
								<picture className="featured_cover__image-container">
									<img src={cicloUmaHoraFeaturedImageCoverMid}  title=""/>
								</picture>
							</div>
							<div className="section-page__featured_content">

								<div className="featured__heading">
									<HeadlineB
										// mobile={ window.innerWidth <= 679 } 
										title={properties.sections.ciclo_uma_hora.headline.title}
										subtitle={properties.sections.ciclo_uma_hora.headline.subtitle}
										paragraphDefault={properties.sections.ciclo_uma_hora.headline.paragraph.default}
										// paragraphMobile={properties.sections.ciclo_uma_hora.headline.paragraph.mobile}
										noticeParagraphList={properties.sections.ciclo_uma_hora.headline.notice.default.paragraph}																
									>
									</HeadlineB>			
								</div>

								<div className="featured_cover  my-default">
									<picture className="featured_cover__image-container">
										<img src={cicloUmaHoraFeaturedImageCoverMid}  title=""/>
									</picture>
								</div>
								
								{/* <p className="section-page__paragraph  paragraph-notice">{properties.sections.ciclo_uma_hora.headline.notice.default.paragraph[0]}</p> */}
								
								<div className="featured__call-to-action">
									<SeeMore link="#funcao-volto-logo" label="Veja mais" />
								</div>

							</div>
						</article>

					</div>
				</Sections>								

				<Sections id="funcao-volto-logo" setClass="funcao-volto-logo section" ref={this.myRef}>
					<div className="container">
						<Headline 
							title={properties.sections.funcao_volto_logo.headline.title}
							subtitle={properties.sections.funcao_volto_logo.headline.subtitle}
							paragraphDefault={properties.sections.funcao_volto_logo.headline.paragraph.default}
						></Headline>
						<picture className="border">
							<img 
								alt={properties.sections.funcao_volto_logo.headline.title}  
								src={funcaVoltoLogoSmall} 
								srcSet={`.section-page__featured {
									grid-row: 3;
								}
									${funcaVoltoLogoSmall} 322w, 
									${funcaVoltoLogoMedium} 644w
								`} 
								onLoad={this.onLoad} />
						</picture>
						<p className="small">
							{properties.sections.funcao_volto_logo.asterisk[0]} <br />
							{properties.sections.funcao_volto_logo.asterisk[1]}
						</p>
						<SeeMore link="#ciclo-edredom" label="Veja mais" />
					</div>
				</Sections>

				<Sections id="ciclo-edredom" setClass="ciclo-edredom section">
					<div className="container">
						<Headline 
							title={properties.sections.ciclo_edredom.headline.title}
							subtitle={properties.sections.ciclo_edredom.headline.subtitle}
							paragraphDefault={properties.sections.ciclo_edredom.headline.paragraph.default}
						></Headline>
					
						<picture className="border">
							<img 
							alt={properties.sections.funcao_volto_logo.headline.title}  
							src={cicloEdredomSmall} 
							srcSet={`
								${cicloEdredomSmall} 322w, 
								${cicloEdredomMedium} 644w
							`} 
							onLoad={this.onLoad} />
						</picture>
						<p className="small">
							{properties.sections.ciclo_edredom.asterisk}
						</p>
						<SeeMore link="#products" label="Veja mais" />
						{/* <SeeMore link="#play-video" label="Veja mais" /> */}
					</div>
				</Sections>

				{/* <Sections id="play-video" setClass="play-video">
					<Video setSrc="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
				</Sections> */}

				<Sections id="products" setClass="products section">
					<div className="container">
						<div className="title">
							<h2>Brastemp, autoridade em performance de lavagem</h2>
						</div>

						<div className="slider-products">
							<Slider {...settingsThree}>
								<div>
									<Query query={ProductShowcaseQuery}>
										{({ loading, data }) => {
											
											const produtos = {
												price : data.product.items[0].sellers[0].commertialOffer.Price,
												listPrice : data.product.items[0].sellers[0].commertialOffer.ListPrice,
												installment : data.product.items[0].sellers[0].commertialOffer.Installments,
												title: data.product.productName,
												skuProduto: data.product.items[0].referenceId[0].Value,
												modelo: [
													{
														imageUrl: data.product.items[0].images[0].imageUrl,
														slug: data.product.linkText
													}
												]
											};

											if(loading)
												return (<p>loading</p>)
											return (
												<CardProdutoVitrine 
													produto={produtos}
													brand={"Brastemp"}
													position={1}
													list={"lava-seca"}
													categoria={"lava-seca"}
													installment={true}
													listPrice={true}
													price={true}
													page={"store/product"}
												/>
											)
										}}
									</Query>					
								</div>
								<div>
									<Query query={ProductShowcaseQuery2}>
										{({ loading, data }) => {
											if(loading)
												return (<p>loading</p>)
												//console.log(data)
											const produtos = {
												price : data.product.items[0].sellers[0].commertialOffer.Price,
												listPrice : data.product.items[0].sellers[0].commertialOffer.ListPrice,
												installment : data.product.items[0].sellers[0].commertialOffer.Installments,
												title: data.product.productName,
												skuProduto: data.product.items[0].referenceId[0].Value,
												modelo: [
													{
														imageUrl: data.product.items[0].images[0].imageUrl,
														slug: data.product.linkText
													}
												]
											}
											return (
												<CardProdutoVitrine 
													produto={produtos}
													brand={"Brastemp"}
													position={1}
													list={"lava-seca"}
													categoria={"lava-seca"}
													installment={true}
													listPrice={true}
													price={true}
													page={"store/product"}
												/>
											)
										}}
									</Query>	
								</div>
							</Slider>

						</div>

						
					</div>
					
				</Sections>


				<aside className="container-overlay  invisible">
					<ButtonOutline label="Fechar" /> 
					<ModalCompareImage />
					<ModalTypeStainList
						title={properties.sections.ciclo_tira_mancha.modal.stain.title}
						columOne={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.one}
						columTwo={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.two}
						columThree={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.three}
						columFour={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.four}
						columFive={properties.sections.ciclo_tira_mancha.modal.stain.type_stain.five}
					></ModalTypeStainList>		
				</aside>

			</div>
			
			
			

			
		) }
	}
export default lavaESeca;
