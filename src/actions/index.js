import { FETCH_USERS } from './types';
import axios from 'axios';

export function fetchUsers(){
  const request = axios('https://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: request
  };
}