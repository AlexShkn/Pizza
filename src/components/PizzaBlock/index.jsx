import React from 'react'
import Modal from 'react-modal'

import ModalPizzaBlock from '../ModalPizzaBlock'

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

function PizzaBlock(props) {
	const { imageUrl, title, types, sizes, price, id } = props
	const [addToCart, setAddToCart] = React.useState(false)
	const [selectedType, setSelectedType] = React.useState(0)
	const [selectedSize, setSelectedSize] = React.useState(0)
	const [modalIsOpen, setIsOpen] = React.useState(false)

	const updatePizzaState = () => {
		setAddToCart(!addToCart)
	}

	function changeStateModal(e) {
		setIsOpen(!modalIsOpen)
	}

	const pizzasTypes = ['тонкое', 'традиционное']

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
							{!addToCart ? (
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
										fill="white"
									/>
								</svg>
							) : (
								''
							)}

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
