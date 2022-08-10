<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AssetsController extends Controller
{
    function js($script) {
        require "../resources/js/$script";
    }
    function css($style) {
        require "../resources/css/$style";
    }
}
