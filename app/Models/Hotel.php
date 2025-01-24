<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'email_verified',
        'phone_no',
        'phone_no_verified',
        'identity_no',
        'gender',
        'from_date',
        'to_date',
        'duration',
        'tour_location',
        'no_of_member',
        'price',
    ];
}