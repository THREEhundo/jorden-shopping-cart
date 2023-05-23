import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

const Store = () => {
	return (
		<>
			<h1>Store</h1>
			<Row>
				{storeItems.map(item => (
					<Col md={2} lg={3} xs={1}>
						<StoreItem {...item} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default Store
