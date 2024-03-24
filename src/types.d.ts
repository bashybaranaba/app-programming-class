type WeatherProps = {
  weather: string;
};

type WeatherContextType = {
  weather: string;
  changeWeather: () => void;
};

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

type Task = {
  id: number;
  name: string;
  completed: boolean;
};
