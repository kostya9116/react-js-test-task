import React, {Component} from "react";
import axios from 'axios';

export default class GetDataService {
    getData(name) {
        return axios.get(`/data/${name}`);
    }

}
