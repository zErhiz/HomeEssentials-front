import { useEffect} from "react";
import { Link as Anchor } from 'react-router-dom'
import categories_actions from '../../../store/actions/categories'
import { useSelector, useDispatch } from "react-redux";

const CategoriesNav = () => {
  let { categories_read } = categories_actions
  const dispatch = useDispatch()
  let categories = useSelector(store => store.categories.categories)


  useEffect(() => {
    if (categories.length === 0) {
      dispatch(categories_read())

    }
  }, [])

  return (
    <div className='md:h-[40px] bg-[#7847E0] hidden lg:block lg:flex items-center content-center'>
      <div className='text-white font-medium'>
        <ul className="flex justify-start px-12 space-x-4 items-center content-center flex-wrap h-fit">

          <li><Anchor to="/allproducts" className="sm:text-xs">Buy all</Anchor></li>
          {categories.map((cat) => (
            <li key={cat._id}>
              <Anchor to={`/products/category/${cat._id}`} className="sm:text-xs">
                {cat.name}
              </Anchor>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default CategoriesNav