<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SubscriptionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $response = Http::withHeaders([
            'accept' => 'application/json',
            'api-key' => env('BREVO_API_KEY'),
            'content-type' => 'application/json',
        ])->post('https://api.brevo.com/v3/contacts', [
            'updateEnabled' => false,
            'email' => $request->input('email'),
        ]);

        if ($response->successful()) {
            return $response->json(); 
        } else {
            return $response->body();
        }

        return response()->json(['message' => 'Subscription successful'], 200);
    }
}
