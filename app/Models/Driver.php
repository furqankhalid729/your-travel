<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'identity_no',
        'email',
        'gender',
        'contact_no',
        'license_no',
        'license_category',
        'experience',
        'profile_image',
        'status',
        'card_id',
    ];
}
