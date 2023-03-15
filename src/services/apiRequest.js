/**
 * @fileoverview This file contains the functions that make the requests to the backend for login,register and refresh token
 * @author Alina Dorosh
 */

import { USERS_API, FORGOTTEN_PASSWORD_API } from "../config/urls";

export default class ApiRequest {
  static async register(body) {
    try {
      const response = await fetch(`${USERS_API}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }

  static async login(body) {
    try {
      const response = await fetch(`${USERS_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }

  static async refresh(refreshToken) {
    try {
      const response = await fetch(`${USERS_API}/refresh`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": refreshToken,
        },
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }

  static async forgottenPassword(body) {
    try {
      const response = await fetch(`${FORGOTTEN_PASSWORD_API}/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }

  static async resetPassword(body, token) {
    try {
      const response = await fetch(
        `${FORGOTTEN_PASSWORD_API}/reset-password/${token}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      let data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}
