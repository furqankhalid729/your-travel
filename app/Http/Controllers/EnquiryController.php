<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enquiry;
use Inertia\Inertia;
use App\Enums\InertiaViews;

class EnquiryController extends Controller
{
    public function index(){
        $enquiries = Enquiry::latest()->get();
        return Inertia::render(InertiaViews::AdminEnquiry->value, [
            'enquiries' => $enquiries,
        ]);
    }

    public function store(Request $request){
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10',
        ]);
        Enquiry::create($validated);
        return redirect()->back()->with('success', 'Your message has been received! We will get back to you soon.');
    }

    public function show($id){
        $enquiry = Enquiry::where("id",$id)->first();
        return Inertia::render(InertiaViews::AdminEnquiryDetail->value, [
            'enquiry' => $enquiry,
        ]);
    }
}
