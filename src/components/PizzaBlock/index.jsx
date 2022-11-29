import React from 'react'
import Modal from 'react-modal'

import ModalPizzaBlock from '../ModalPizzaBlock'

import { buttonPlus } from '../../assets/svg-icons'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '30px',
		border: '2px solid #232323',
	},
}

const pizzasTypes = ['тонкое', 'традиционное']

function PizzaBlock(props) {
	const { imageUrl, title, types, sizes, price, id } = props
	const [addToCart, setAddToCart] = React.useState(false)
	const [selectedType, setSelectedType] = React.useState(0)
	const [selectedSize, setSelectedSize] = React.useState(0)
	const [modalIsOpen, setIsOpen] = React.useState(false)

	const updatePizzaState = () => {
		setAddToCart(!addToCart)
	}

	function changeStateModal() {
		setIsOpen(!modalIsOpen)
	}

	return (
		<>
			<div className="pizza-block-wrapper">
				<div className="pizza-block">
					<img
						id={id}
						className="pizza-block__image"
						src={imageUrl}
						alt="Pizza"
						onClick={changeStateModal}
					/>
					<h4 className="pizza-block__title">{title}</h4>
					<div className="pizza-block__selector">
						<ul>
							{types.map(typeIndex => (
								<li
									key={typeIndex}
									onClick={() => setSelectedType(typeIndex)}
									className={selectedType === typeIndex ? 'active' : ''}>
									{pizzasTypes[typeIndex]}
								</li>
							))}
						</ul>
						<ul>
							{sizes.map((size, index) => (
								<li
									key={index}
									onClick={() => setSelectedSize(index)}
									className={selectedSize === index ? 'active' : ''}>
									{size} см.
								</li>
							))}
						</ul>
					</div>
					<div className="pizza-block__bottom">
						<div className="pizza-block__price">
							<span>{price}</span> ₽
						</div>
						<button className="button button--outline button--add">
							{!addToCart ? buttonPlus : ''}

							<span onClick={updatePizzaState}>{!addToCart ? 'Добавить' : 'В корзине'}</span>
							{addToCart ? <i>✔</i> : ''}
						</button>
					</div>
				</div>
			</div>
			<Modal isOpen={modalIsOpen} onRequestClose={changeStateModal} style={customStyles}>
				<ModalPizzaBlock
					changeStateModal={changeStateModal}
					modalIsOpen={modalIsOpen}
					selectedSize={selectedSize}
					setSelectedSize={setSelectedSize}
					selectedType={selectedType}
					setSelectedType={setSelectedType}
					pizzasTypes={pizzasTypes}
					{...props}
				/>
			</Modal>
		</>
	)
}

export default PizzaBlock
