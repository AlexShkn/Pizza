import React from 'react'
import Modal from 'react-modal'

import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from 'redux/slices/cartSlice'
import { createUniqItemId } from 'utils/createUniqItemId'

import ModalPizzaBlock from './ModalPizzaBlock'

import { buttonPlus } from 'assets/svg-icons'

const customStyles = {
	overlay: {
		position: 'fixed',
		zIndex: 1020,
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		background: 'rgba(0, 0, 0, 0.6)',
		backdropFilter: 'blur(3px)',
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '30px',
		borderRadius: '5px',
		boxShadow: '0 3rem 5rem rgba(0, 0, 0, 0.3)',
	},
}

function PizzaBlock(props) {
	const { imageUrl, title, types, sizes, price, id, compound, weight } = props

	const dispatch = useDispatch()
	const { items, pizzasTypes } = useSelector(state => state.cart)

	const [selectedType, setSelectedType] = React.useState(types[0] || 0)
	const [selectedSize, setSelectedSize] = React.useState(sizes[0] || 0)
	const [modalIsOpen, setIsOpen] = React.useState(false)

	const itemId = createUniqItemId(id, selectedType, selectedSize)
	const isAddedToCart = items.find(obj => obj.itemId === itemId)
	let finalPrice = 0

	if (price) {
		switch (selectedSize) {
			case 26:
				finalPrice = price
				break
			case 30:
				finalPrice = Math.floor(price * 1.3)
				break
			case 40:
				finalPrice = Math.floor(price * 2)
				break
			default:
				finalPrice = price
				break
		}
	}

	const onClickAdd = () => {
		const item = {
			id,
			title,
			itemId,
			type: selectedType,
			size: selectedSize,
			imageUrl,
			price: finalPrice,
			compound,
			weight,
		}

		isAddedToCart ? dispatch(removeItem(item.itemId)) : dispatch(addItem(item))
	}

	return (
		<>
			<div className="pizza-block-wrapper">
				<div className="pizza-block">
					<img
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
							{types.map(type => (
								<li
									key={type}
									onClick={() => setSelectedType(type)}
									className={selectedType === type ? 'active' : ''}>
									{pizzasTypes[type]}
								</li>
							))}
						</ul>
						<ul>
							{sizes.map((size, index) => (
								<li
									key={index}
									onClick={() => setSelectedSize(size)}
									className={selectedSize === size ? 'active' : ''}>
									{size} см.
								</li>
							))}
						</ul>
					</div>
					<div className="pizza-block__bottom">
						<div className="pizza-block__price">
							<span>{finalPrice}</span> ₽
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
					isAddedToCart={isAddedToCart}
					finalPrice={finalPrice}
					{...props}
				/>
			</Modal>
		</>
	)
}

export default PizzaBlock
