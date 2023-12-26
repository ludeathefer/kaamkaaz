import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const baseUrl = "http://172.16.20.233:2127";

const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem("jwt", token);
  } catch (err) {
    console.log(err);
  }
};
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("jwt");
    return token;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const deleteToken = async () => {
  try {
    const token = await AsyncStorage.removeItem("jwt");
    return token;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
};

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return JSON.parse(user);
  } catch (err) {
    console.log(err);
    return null;
  }
};

const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/login`, {
      email,
      password,
    });
    console.log(res.data);

    if (res.data.token) {
      await saveToken(res.data.token);
      await saveUser(res.data);
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};

const register = async ({ username, email, password, isServiceProvider }) => {
  try {
    console.log(username, email, password, isServiceProvider);
    const res = await axios.post(`${baseUrl}/auth/register`, {
      name: username,
      email,
      password,
      provider: isServiceProvider,
    });

    if (res.data.token) {
      await saveToken(res.data.token);
      await saveUser(res.data);
      return res.data;
    }
    throw new Error("error");
  } catch (e) {
    console.error(e);
  }
};

export { login, register };
