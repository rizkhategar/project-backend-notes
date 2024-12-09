Berikut adalah template **README.md** yang kreatif dan siap untuk digunakan di repository Anda:

```markdown
# Project Backend Notes 🚀

Welcome to the **Project Backend Notes** repository! 📝  
This backend API is designed to help you create, manage, and delete notes with a simple RESTful architecture using **Node.js** and **Express**. The project is fully integrated with a MySQL database for persistent storage of notes data.

---

## 🎯 Features

- **Create Notes**: Easily create a new note with a title and content.
- **View All Notes**: Retrieve a list of all your notes.
- **View Single Note**: Fetch a specific note using its unique ID.
- **Update Notes**: Modify an existing note’s title, content, and timestamp.
- **Delete Notes**: Remove a note from the database.

---

## 🛠️ Prerequisites

Before you begin, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/en/) (for running the server)
- [npm](https://www.npmjs.com/) (Node package manager)
- [MySQL](https://dev.mysql.com/downloads/installer/) (for storing data)

---

## 📦 Installation & Setup

### 1. Clone the Repository
To start using this project, clone the repository to your local machine:

```bash
git clone https://github.com/rizkhategar/project-backend-notes.git
```

### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:

```bash
cd project-backend-notes
npm install
```

### 3. Configure Database Connection
Create a `.env` file in the root directory and add your MySQL configuration:

```env
APP_PORT=3000
HOST=localhost
USER=root
PASSWORD=yourpassword
DATABASE=notes_db
```

Replace `yourpassword` with the correct password for your MySQL instance.

### 4. Start the Server
Now that the dependencies are installed and the environment is set up, run the server:

```bash
npm run dev
```

Your server will now be running on `http://localhost:3000`.

---

## 📡 API Endpoints

### 1. Create a New Note
- **Method**: `POST`
- **URL**: `/api/notes`
- **Request Body**:
  ```json
  {
    "title": "Sample Note",
    "note": "This is a sample note content."
  }
  ```
- **Response**:
  ```json
  {
    "id": 1633728924737,
    "title": "Sample Note",
    "datetime": "2024-12-09T00:00:00Z",
    "note": "This is a sample note content."
  }
  ```

### 2. Get All Notes
- **Method**: `GET`
- **URL**: `/api/notes`
- **Response**:
  ```json
  [
    {
      "id": 1633728924737,
      "title": "Sample Note",
      "datetime": "2024-12-09T00:00:00Z",
      "note": "This is a sample note content."
    },
    {
      "id": 1633728924738,
      "title": "Another Note",
      "datetime": "2024-12-09T01:00:00Z",
      "note": "Content of another note."
    }
  ]
  ```

### 3. Get a Note by ID
- **Method**: `GET`
- **URL**: `/api/notes/:id`
- **Response**:
  ```json
  {
    "id": 1633728924737,
    "title": "Sample Note",
    "datetime": "2024-12-09T00:00:00Z",
    "note": "This is a sample note content."
  }
  ```

### 4. Update a Note
- **Method**: `PUT`
- **URL**: `/api/notes/:id`
- **Request Body**:
  ```json
  {
    "title": "Updated Note Title",
    "note": "Updated content of the note."
  }
  ```
- **Response**:
  ```json
  {
    "id": 1633728924737,
    "title": "Updated Note Title",
    "datetime": "2024-12-09T00:00:00Z",
    "note": "Updated content of the note."
  }
  ```

### 5. Delete a Note
- **Method**: `DELETE`
- **URL**: `/api/notes/:id`
- **Response**:
  ```json
  {
    "message": "Note deleted successfully"
  }
  ```

---

## 🧪 Testing the API

You can test the API using tools like **Postman** or **curl**.

### Example using Postman:

1. **Create a new note**:
   - Method: `POST`
   - URL: `http://localhost:3000/api/notes`
   - Body (raw JSON):
     ```json
     {
       "title": "My First Note",
       "note": "Content of my first note."
     }
     ```

2. **Get all notes**:
   - Method: `GET`
   - URL: `http://localhost:3000/api/notes`

3. **Get a note by ID**:
   - Method: `GET`
   - URL: `http://localhost:3000/api/notes/{id}`

4. **Update a note**:
   - Method: `PUT`
   - URL: `http://localhost:3000/api/notes/{id}`
   - Body (raw JSON):
     ```json
     {
       "title": "Updated Note Title",
       "note": "Updated content for the note."
     }
     ```

5. **Delete a note**:
   - Method: `DELETE`
   - URL: `http://localhost:3000/api/notes/{id}`

---

## ⚙️ Technologies Used

- **Node.js** for server-side logic.
- **Express.js** for building the API.
- **MySQL** for data storage.
- **Nodemon** for auto-reloading during development.

---


