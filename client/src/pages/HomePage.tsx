import { Row, Col } from "react-bootstrap"
import LoadingBox from '../component/LoadingBox'
import MessageBox from '../component/MessageBox'
import ProductItem from "../component/ProductItem"
import { Helmet } from "react-helmet-async"
import { useGetProductsQuery } from "../hooks/producHooks"
import { ApiError } from "../types/ApiError"
import { getError } from "../utils"



export default function HomePage() {
  const {data: products, isLoading, error} = useGetProductsQuery()
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Amaclone</title>
      </Helmet>
        {products!.map(product => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
          </Col>
        ))}
    </Row>
  )
}
