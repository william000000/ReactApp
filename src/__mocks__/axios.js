import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default axios.create('https://restcountries-v1.p.rapidapi.com/');
