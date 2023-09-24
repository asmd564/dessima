import React from "react";
import { ProjectCard } from "../projectCard/projectCard";
import { Loader } from "../../../components/loader/loader";

export const ProjectsList = () => {
    return (
        <section class="projects">
            <ProjectCard/>
        </section>
    );
}