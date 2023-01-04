import React from 'react'

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
		pizzasTypes,
		isAddedToCart,
	} = props

	const { imageUrl, title, types, sizes, finalPrice, weight, compound } = props

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
									{selectedType === 1
										? Math.floor(weight[selectedSize] * 1.1)
										: weight[selectedSize]}
									г
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
