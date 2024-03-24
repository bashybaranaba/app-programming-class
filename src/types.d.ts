type WeatherProps = {
  weather: string;
};

type WeatherContextType = {
  weather: string;
  changeWeather: () => void;
};

type User = {
  user: {
    id: string;
    name: string;
    email: string;
    age: number;
  };
};
