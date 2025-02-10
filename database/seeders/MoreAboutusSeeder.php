<?php

namespace Database\Seeders;

use App\Models\Aboutus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoreAboutusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $newAboutus = [
            'correlative' => 'about-kaori-title',
            'name' => 'Titulo "Sobre la fundadora"',
            'description' => '✨ Ayudo a mis alumnos a aumentar su *confianza* y *seguridad personal*, hablar en público con soltura y autenticidad, y desarrollar habilidades sociales efectivas.',
        ];
        Aboutus::updateOrCreate(['name' => $newAboutus['name']], $newAboutus);
    }
}
