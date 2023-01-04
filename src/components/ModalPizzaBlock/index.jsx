import React from 'react'
import { useSelector } from 'react-redux'

import styles from './ModalPizzaBlock.module.scss'

import { buttonPlus } from '../../assets/svg-icons'

function ModalPizzaBlock(props) {
	const {
		onClickAdd,
		modalIsOpen,
		setIsOpen,
		selectedSize,
		setSelectedSize,
		selectedType,
		setSelectedType,
		isAddedToCart,
	} = props

	const { imageUrl, title, types, sizes, finalPrice, weight, compound } = props

	const { pizzasTypes } = useSelector(state => state.cart)
	let currentWeight = ''

	if (weight) {
		switch (selectedSize) {
			case 26:
				currentWeight = weight[0]
				break
			case 30:
				currentWeight = weight[1]
				break
			case 40:
				currentWeight = weight[2]
				break
			default:
				currentWeight = weight
				break
		}
	}

	return (
		<div className={styles.modal}>
			<div>
				<button className={styles.close} onClick={() => setIsOpen(!modalIsOpen)}>
					+
				</button>
				<img className={styles.imageUrl} src={imageUrl} alt="" />
				<div className={styles.body}>
					<span className={styles.title}>{title}</span>
					<div className={styles.description}>
						<ul>
							<li>Размер:</li>
							{sizes.map((size, index) => (
								<li
									key={index}
									onClick={() => setSelectedSize(size)}
									className={selectedSize === size ? 'active-option' : ''}>
									{size} см.
								</li>
							))}
						</ul>

						<ul>
							<li>Тесто:</li>
							{types.map(typeIndex => (
								<li
									key={typeIndex}
									onClick={() => setSelectedType(typeIndex)}
									className={selectedType === typeIndex ? 'active-option' : ''}>
									{pizzasTypes[typeIndex]}
								</li>
							))}
						</ul>
						{weight && (
							<div>
								<p className={styles.compound}>
									<span>Вес: </span>
									{selectedType === 1 ? Math.floor(currentWeight * 1.3) : currentWeight}г
								</p>
							</div>
						)}
						{compound && (
							<div>
								<p className={styles.compound}>
									<span>Состав: </span>
									{compound}
								</p>
							</div>
						)}
					</div>
					<div className={styles.navigate}>
						<span className={styles.price}>Цена: {finalPrice} ₽</span>
						<button onClick={() => onClickAdd()} className="button button--outline button--add">
							{!isAddedToCart ? buttonPlus : ''}
							<span>{!isAddedToCart ? 'Добавить в корзину' : 'В корзине'}</span>
							{isAddedToCart ? <i>✔</i> : ''}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalPizzaBlock
