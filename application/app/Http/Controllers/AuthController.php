<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    function registerView() {
        return view('sample',[
            'title' => 'Регистрация',
            'page' => 'components/registerForm',
            'css' => 'register'
        ]);
    }
}
