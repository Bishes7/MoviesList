# Movie Card Component

This repository contains a React component for rendering a movie card, allowing users to display movie information, categorize movies by mood, and remove movies from a list.

## Features

- **Display Movie Details:** Shows the movie's poster, title, IMDB rating, and plot.
- **Categorization:** Buttons to add the movie to either a "Drama" or "Action" list.
- **Deletion:** Option to remove a movie from the list.

## Usage

### Props

The `Card` component expects the following props:

| Prop Name           | Type     | Description                                                                                              |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `searchedMovie`     | Object   | The movie data containing details such as `Poster`, `Title`, `imdbRating`, `Plot`, `mood`, and `imdbID`. |
| `deleteFunc`        | Function | Function to handle deleting a movie from the list. Receives the `imdbID` as an argument.                 |
| `handleOnAddToList` | Function | Function to categorize a movie. Receives the mood ("drama" or "action") as an argument.                  |

### Example

```jsx
import React from "react";
import Card from "./Card";

const App = () => {
  const movie = {
    Poster: "https://example.com/poster.jpg",
    Title: "Example Movie",
    imdbRating: "8.5",
    Plot: "This is an example plot.",
    mood: null,
    imdbID: "tt1234567",
  };

  const handleDelete = (id) => {
    console.log(`Delete movie with ID: ${id}`);
  };

  const handleAddToList = (mood) => {
    console.log(`Add movie to ${mood} list.`);
  };

  return (
    <div>
      <Card
        searchedMovie={movie}
        deleteFunc={handleDelete}
        handleOnAddToList={handleAddToList}
      />
    </div>
  );
};

export default App;
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Bishes7/MoviesList.git
```

2. Navigate to the project directory:

```bash
cd movie-card-component
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

## File Structure

```
.
├── Card.js           # The main Card component
├── App.js            # Example usage of the Card component
├── package.json      # Project dependencies and scripts
└── README.md         # Documentation
```

## Technologies Used

- React
- JavaScript
- Bootstrap (for styling)

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Contact

For any inquiries or feedback, please contact [specialbishes9@gmail.com]
