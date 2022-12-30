import React from 'react'
import Modal from 'react-modal'

import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../redux/slices/cartSlice'

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

	const dispatch = useDispatch()
	const { items } = useSelector(state => state.cart)
	const isAddedToCart = items.find(obj => obj.id === id)

	const [selectedType, setSelectedType] = React.useState(0)
	const [selectedSize, setSelectedSize] = React.useState(0)
	const [modalIsOpen, setIsOpen] = React.useState(false)

	const onClickAdd = () => {
		const item = {
			id,
			title,
			type: selectedType,
			size: selectedSize,
			imageUrl,
			price,
		}
		isAddedToCart ? dispatch(removeItem(id)) : dispatch(addItem(item))
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
						onClick={() => setIsOpen(!modalIsOpen)}
					/>
					<h4 onClick={() => setIsOpen(!modalIsOpen)} className="pizza-block__title">
						{title}
					</h4>
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
						<button onClick={() => onClickAdd()} className="button button--outline button--add">
							{!isAddedToCart ? buttonPlus : ''}

							<span>{!isAddedToCart ? 'Добавить' : 'В корзине'}</span>
							{isAddedToCart ? <i>✔</i> : ''}
						</button>
					</div>
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setIsOpen(!modalIsOpen)}
				style={customStyles}>
				<ModalPizzaBlock
					modalIsOpen={modalIsOpen}
					onClickAdd={onClickAdd}
					setIsOpen={setIsOpen}
					selectedSize={selectedSize}
					setSelectedSize={setSelectedSize}
					selectedType={selectedType}
					setSelectedType={setSelectedType}
					pizzasTypes={pizzasTypes}
					isAddedToCart={isAddedToCart}
					{...props}
				/>
			</Modal>
		</>
	)
}

export default PizzaBlock
