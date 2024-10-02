import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { getRestaurants } from "../redux/actions/restAction";
import RestaurantCard from "../components/RestaurantCard";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurant
  );
  const retry = () => dispatch(getRestaurants());

  return (
    <Container>
      <h1 className="font-semibold text-lg md:text-xl">
        Yakınınızdaki Restoranlar
      </h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error msg={error} retry={retry} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {restaurants.map((item) => (
              <RestaurantCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
