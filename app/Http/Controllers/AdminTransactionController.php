<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Enums\InertiaViews;
use Illuminate\Http\Request;
use App\Models\Transaction;

class AdminTransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with(['payment.booking'])->get();
        return Inertia::render(InertiaViews::AdminTransaction->value, [
            'transactions' => $transactions
        ]);
    }
    public function updateStatus(Request $request, $id)
    {
        try {
            $transaction = Transaction::findOrFail($id);
            $transaction->status = $request->status;
            $transaction->save();

            return response()->json([
                'success' => true,
                'message' => 'Status updated successfully',
                'transaction' => $transaction
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update status',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
