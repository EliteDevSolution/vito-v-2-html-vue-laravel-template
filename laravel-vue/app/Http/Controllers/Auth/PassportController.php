<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;

class PassportController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        $http = new Client;

        $response = $http->post('http://127.0.0.1:8003/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => 'GbrantqUDYLfMciHpsNCl7G01gkzM7SSEON6coPG',
                'username' => $credentials['email'],
                'password' => $credentials['password'],
                'scope' => '',
            ],
        ]);

        return json_decode((string) $response->getBody(), true);
    }
}
