import { Select } from 'antd'
import React from 'react'
import ProjectDefinition from '../models/ProjectDefinition'

interface ProjectSelectorProps {
    allProjects: ProjectDefinition[]
    selectedProjectId: string
    onChange: (value: string) => void
    excludeProjectId?: string
}

class ProjectSelector extends React.Component<ProjectSelectorProps> {
    render() {
        const { allProjects, selectedProjectId, onChange, excludeProjectId } =
            this.props

        const projectOptions = [
            {
                value: '',
                label: 'root <no parent>',
            },
            ...allProjects
                .filter((project) => project.id !== excludeProjectId)
                .map((project) => ({
                    value: project.id,
                    label: project.name,
                })),
        ]

        return (
            <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Select a parent project"
                optionFilterProp="label"
                value={selectedProjectId || ''}
                onChange={onChange}
                options={projectOptions}
            />
        )
    }
}

export default ProjectSelector
