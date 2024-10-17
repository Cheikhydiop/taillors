import { postService } from '../services/postService';


export async function loadAllPosts() {
  try {
    const allPosts = await postService.getAllPosts();  
    console.log('posts des users :', allPosts);  
    return allPosts;  
  } catch (error) {
    // console.error('Erreur lors de la récupération du posts :', error);  // Gestion des erreurs
    return null;  
  }
}
