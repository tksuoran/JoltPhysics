/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md87", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Scaling Shapes", "index.html#scaling-shapes", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Level of Detail", "index.html#level-of-detail", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Being Sloppy While Still Being Deterministic", "index.html#sloppy-determinism", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md3", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md4", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md5", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md8", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md9", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md10", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md12", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md14", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md15", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md2", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md6", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md7", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "Unreleased changes", "md__docs_2_release_notes.html#autotoc_md25", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md26", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md29", null ]
      ] ],
      [ "v5.2.0", "md__docs_2_release_notes.html#autotoc_md30", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md31", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md32", null ]
      ] ],
      [ "v5.1.0", "md__docs_2_release_notes.html#autotoc_md33", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md34", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md35", null ],
          [ "HeightField Shape", "md__docs_2_release_notes.html#autotoc_md36", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md37", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md38", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md39", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md40", null ]
      ] ],
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md41", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md42", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md43", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md44", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md45", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md46", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md47", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md48", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md49", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md50", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md51", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md52", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md53", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md54", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md55", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md56", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md57", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md58", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md59", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md60", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md61", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md62", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md63", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md64", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md65", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md66", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md67", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md68", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md69", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md70", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v5.2.0 and latest", "md__docs_2_a_p_i_changes.html#autotoc_md17", null ],
      [ "Changes between v5.1.0 and v5.2.0", "md__docs_2_a_p_i_changes.html#autotoc_md18", null ],
      [ "Changes between v5.0.0 and v5.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md19", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md20", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md21", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md22", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md23", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md24", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md27", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md28", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md73", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md74", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md75", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md76", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md77", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md78", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md79", null ],
      [ "Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md80", [
        [ "Link Error: File Format Not Recognized", "md__build_2_r_e_a_d_m_e.html#autotoc_md81", null ],
        [ "Link Error: Unresolved External Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md82", null ],
        [ "Link Error: Undefined Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md83", null ],
        [ "DirectX Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md84", null ],
        [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md85", null ]
      ] ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md86", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2da4457d440870ad6d42bab9082d9bf9b61",
"_hash_combine_8h.html#a396c677c4eb61f19e11cc202aac23c38",
"_object_stream_8h_source.html",
"_scale_helpers_8h.html#a1eeb857fb92f13a5ddd9dac662146b96",
"_strided_ptr_8h_source.html",
"class_a_a_b_b_tree_to_buffer.html#acae333f2766987a53f64a7beea67904b",
"class_body.html#acb02850d1a8baecc879d224f47e9ab70",
"class_body_manager.html#a5f4202f0ef087177b642a93c13d82d9a",
"class_cast_sphere_vs_triangles.html#aedd22f079116eb249e674bb2350b283e",
"class_collide_shape_result.html#a84eb31fb18eea1a96cadad32a3f6fe4e",
"class_constraint_settings.html#a7022c1a032590883f2002aeef24adf69",
"class_cylinder_shape_1_1_cylinder.html#ac2fbf97f298eabff324fe1200d1e6974",
"class_default_object_layer_filter.html#aadd5a15cd5f3f980b89a95a843155a51",
"class_gear_constraint.html#acdb35bebda74e178f96d516277dda140",
"class_i_object_stream_in.html#ad4e124e1a7df0b66a3b525181cde8660",
"class_lock_free_hash_map.html#ab0b1ca4bac3c00813a024ed4b462e44d",
"class_motorcycle_controller.html#a55d13eac40efa2eef9a7d87f23c39405",
"class_offset_center_of_mass_shape.html#a5d0b1db48c88428b7be626d822e0599b",
"class_plane_shape.html#a401cd22b9f6fbc2f79d565f4e8eb33ba",
"class_rack_and_pinion_constraint.html#a69a8d281fdc1f250625d718dabbc18ed",
"class_s_t_l_aligned_allocator.html#a4457facc139621863361195814d170df",
"class_six_d_o_f_constraint.html#a79b66cc0a8850f926aecbcc56dc52570",
"class_soft_body_creation_settings.html#aad762e491883987d0023fd7613b3642b",
"class_sphere_shape_1_1_sphere_no_convex.html#af220bf4b31e425741bbc587f13bf3eb2",
"class_swing_twist_constraint_part.html#a507f0506fd29b63f244e73670d85d55d",
"class_triangle_grouper.html",
"class_vec4.html#a0c3d97968c479dcc0a08b98134c95e02",
"class_vehicle_track_settings.html#aa8f02b8434926bcb503772b9cf798d00",
"functions_t.html",
"namespace_closest_point.html#a7221bb45d1aec01527f66683bf2611e0",
"struct_compound_shape_1_1_collide_shape_vs_compound_visitor.html#acecad887d6ab8d8d243679afcb0146eb",
"struct_plane_shape_1_1_p_s_get_triangles_context.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';