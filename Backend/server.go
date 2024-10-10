package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type User struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

var users []User = []User{
	{ID: "1", Username: "john_doe", Email: "john@example.com"},
	{ID: "2", Username: "jane_doe", Email: "jane@example.com"},
}

func main() {
	// Adding log statement to indicate server is starting
	log.Println("Starting server on port 8080...")

	router := mux.NewRouter()
	router.HandleFunc("/", getHome).Methods("GET")
	router.HandleFunc("/users", getUsers).Methods("GET")
	router.HandleFunc("/users", createUser).Methods("POST")

	// Adding log statement to indicate that the server is listening
	log.Println("Server listening at 'http://localhost:8080/'")
	log.Fatal(http.ListenAndServe(":8080", router))
}

func getHome(w http.ResponseWriter, r *http.Request) {
	log.Println("GET / - Homepage hit")
	w.Write([]byte("Welcome to the homepage!"))
}

func getUsers(w http.ResponseWriter, r *http.Request) {
	log.Println("GET /users - Fetching all users")
	json.NewEncoder(w).Encode(users)
}

func createUser(w http.ResponseWriter, r *http.Request) {
	// Log when the /users endpoint is hit with a POST request
	log.Println("POST /users - Creating a new user")

	// Decode the incoming request body into a new user struct
	var newUser User
	err := json.NewDecoder(r.Body).Decode(&newUser)

	if err != nil {
		// Log any error in decoding the request body
		log.Println("Error decoding user:", err)
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	// Append the new user to the list of users
	users = append(users, newUser)

	// Log the user creation
	log.Printf("User created: %+v\n", newUser)

	// Respond with the created user in JSON format
	json.NewEncoder(w).Encode(newUser)
}
