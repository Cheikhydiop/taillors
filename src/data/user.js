// user.js
import { userService } from '../services/userService';


export async function loadCurrentUser() {
  try {
    const currentUser = await userService.getCurrentUser();  
    // console.log('Données de l\'utilisateur actuel :', currentUser);  
    return currentUser;  
  } catch (error) {
    // console.error('Erreur lors de la récupération du profil utilisateur :', error);  // Gestion des erreurs
    return null;  
  }
}



export async function updateUserProfile(userData) {
  try {
    const updatedUser = await userService.updateProfile(userData);
    // console.log('Profil mis à jour :', updatedUser);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil :', error);
  }
}

export async function searchForUsers(name) {
  try {
    const users = await userService.searchUsers(name);
    // console.log('Résultats de la recherche pour', name, ':', users);
  } catch (error) {
    // console.error('Erreur lors de la recherche d\'utilisateurs :', error);
  }
}

export async function followUser(followingId) {
  try {
    const result = await userService.followUser(followingId);
    // console.log('Utilisateur suivi avec succès :', result);
  } catch (error) {
    // console.error('Erreur lors du suivi de l\'utilisateur :', error);
  }
}

// loadCurrentUser(); 
// searchForUsers('John');
// followUser(123);  
