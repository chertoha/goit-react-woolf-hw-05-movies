import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default App;
