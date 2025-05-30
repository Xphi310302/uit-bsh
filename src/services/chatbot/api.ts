import axios from "axios";
// import { publicAxiosInstance } from '../axios-config';
import { v4 as uuidv4 } from 'uuid';

const BASE_URL = import.meta.env.VITE_BACKEND_URL; // Replace with your actual backend URL
console.log(BASE_URL);

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatResponse {
  response: string;
  conversation_id: string;
}



// Variable to store the current conversation ID
let currentConversationId: string | null = null;

// Function to initialize a new conversation ID
export function initializeNewConversation(): void {
  currentConversationId = uuidv4();
  localStorage.removeItem('conversation_id'); // Clear the stored conversation ID
}

// Initialize new conversation ID on page load
initializeNewConversation();

export async function sendMessage(message: string): Promise<string> {
  try {
    if (!currentConversationId) {
      currentConversationId = uuidv4();
    }

    console.log('Sending message:', message, 'with room ID:', currentConversationId);
    const response = await axios.post<ChatResponse>(
      `${BASE_URL}/chat/chatDomain`,
      {
        room_id: currentConversationId,
        query: message,
      }
    );

    return response.data.response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error response:', error.response?.data);
      throw new Error(`Network error: ${error.message}`);
    }
    throw error;
  }
}