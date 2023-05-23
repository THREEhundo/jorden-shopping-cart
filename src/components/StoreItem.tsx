import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
	id: number
	name: string
	price: number
	imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
	const quantity = 1

	return (
		<Card className='h-100'>
			<Card.Img
				variant='top'
				src={imgUrl}
				height={'200px'}
				style={{ objectFit: 'cover' }}
			/>
			<Card.Body className='d-flex flex-column bg-dark'>
				<Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
					<span className='fs-2'>{name}</span>
					<span className='ms-2 text-muted'>
						{formatCurrency(price)}
					</span>
				</Card.Title>
				<div className='mt-auto'>
					{quantity === 0 ? (
						<Button variant='outline-primary' className='w-100'>
							+ Add to Cart
						</Button>
					) : (
						<div
							className='d-flex align-items-center justify-content-center flex-column'
							style={{ gap: '.5rem' }}>
							<div
								className='d-flex align-items-center justify-content-center'
								style={{ gap: '.5rem' }}>
								<Button variant='outline-primary'>-</Button>
								<span className='fs-3'>{quantity}</span>
								<Button variant='outline-primary'>+</Button>
							</div>
							<Button variant='danger' size='small'>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	)
}

export default StoreItem
