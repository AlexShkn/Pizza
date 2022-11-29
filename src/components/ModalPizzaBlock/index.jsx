import React from 'react'

import styles from './ModalPizzaBlock.module.scss'
import check from '../../assets/img/check.svg'

function ModalPizzaBlock({
	changeStateModal,
	modalIsOpen,
	imageUrl,
	title,
	types,
	sizes,
	price,
	weight,
	compound,
	selectedSize,
	setSelectedSize,
	selectedType,
	setSelectedType,
	pizzasTypes,
}) {
	const [addedToCart, setAddedToCart] = React.useState(true)

	const addingReport = () => {
		setAddedToCart(false)
	}

	return (
		<div className={styles.modal}>
			{addedToCart ? (
				<div>
					<button className={styles.close} onClick={changeStateModal}>
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
										onClick={() => setSelectedSize(index)}
										className={selectedSize === index ? 'active' : ''}>
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
										className={selectedType === typeIndex ? 'active' : ''}>
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
											: weight[selectedSize]}{' '}
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
							<span className={styles.price}>Цена: {price} ₽</span>
							<button onClick={addingReport} className="button pay-btn">
								Добавить в корзину
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className={styles.checkToCart}>
					<button className={styles.close} onClick={changeStateModal}>
						+
					</button>
					<i>😋</i>
					<div>
						<img src={check} alt="check" />
						<span>Товар добавлен в корзину</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default ModalPizzaBlock
