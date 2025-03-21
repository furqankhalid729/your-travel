<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Http\Request;

class AdminTransactionController extends Controller
{
    public function index(){
        return Inertia::render(InertiaViews::AdminTransaction->value);
    }
}
