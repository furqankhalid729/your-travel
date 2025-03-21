<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Http\Request;
use App\Models\Transaction;

class AdminTransactionController extends Controller
{
    public function index(){
        $transactions = Transaction::with(['payment.booking'])->get();
        return Inertia::render(InertiaViews::AdminTransaction->value,[
            'transactions' => $transactions
        ]);
    }
}
