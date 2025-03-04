<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('bookings', function (Blueprint $table) {
            $table->dropColumn('terms_accepted'); // Remove old column
            $table->string('status')->default('active'); // Add new column
        });
    }

    public function down(): void
    {
        Schema::table('bookings', function (Blueprint $table) {
            $table->boolean('terms_accepted')->default(false);
            $table->dropColumn('status');
        });
    }
};
