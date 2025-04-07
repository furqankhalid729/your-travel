<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AccountController extends Controller
{
    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'required|string|max:255',
            'password' => 'nullable|min:6',
            'profile_url' => 'nullable|image',
        ]);
        Log::info("request", [$request->all()]);
        $user->name = $request->name;

        if ($request->hasFile('profile_url')) {
            $file = $request->file('profile_url');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('profile_photos', $filename);
            $user->profile_url =$path;
        }

        if (!empty($request->password)) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        return redirect()->back()->with('success', 'Account updated successfully!');
    }
}
