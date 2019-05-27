import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieDetail from '../components/MovieDetail';

const mapDispatchToProps = (dispatch, { match }) => {
  return {
    loadMoviePage: () =>
      dispatch({ type: 'LOAD_MOVIE_PAGE', id: match.params.id })
  };
};

const mapStateToProps = state => {
  return {
    movie: state.movieDetail
  };
};

const MovieDetailContainer = ({ loadMoviePage, movie }) => {
  useEffect(() => {
    loadMoviePage();
  }, [loadMoviePage]);
  return <MovieDetail {...movie} />;
};
// WIP
// const listOfGenres = () => {
//     return genres
//       .map(id => {
//         const genre = genres.find(genre => {
//           return genre.id === id;
//         }).name;
//         return genre.charAt(0).toUpperCase() + genre.slice(1);
//       })
//       .join(", ");
//   };

// const getMemberOfCrew = person => {
//     const crew = credits.crew;
//     const getNamesOfMember = member =>
//       crew
//         .filter(person => person.department === member)
//         .map(person => {
//           return {
//             name: person.name,
//             photo: person.profile_path,
//             id: person.id
//           };
//         });

//     if (crew.length > 0) {
//       switch (person) {
//         case "director":
//           return getNamesOfMember("Directing");
//         case "writer":
//           return getNamesOfMember("Writing");
//         case "producer":
//           return getNamesOfMember("Production");
//         case "camera":
//           return crew.filter(person => person.department === "Camera");
//         case "sound":
//           return crew.filter(person => person.department === "Sound");
//         case "art":
//           return crew.filter(person => person.department === "Art");
//         case "editor":
//           return crew.filter(person => person.department === "Editing");
//         default:
//           throw new Error("unexpected crew");
//       }
//     }
//   };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailContainer);
