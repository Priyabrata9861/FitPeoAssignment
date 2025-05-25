import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaHistory, FaCalendarAlt, FaCog } from 'react-icons/fa';
import '../sidebar/sidebar.css';
import { AiTwotonePlusSquare } from "react-icons/ai";
import { FcStatistics } from "react-icons/fc";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SidebarComponent({ collapsed }) {
    return (
        <Sidebar collapsed={collapsed} className="custom-sidebar">
            <div className={`logo ${collapsed ? 'collapsed-logo' : ''}`}>
                <span className="logo-health">Health</span><span className="logo-care">care.</span>
            </div>
            <Menu iconShape="circle">
                <p className="menu-section-title">General</p>
                <MenuItem icon={<RiDashboardHorizontalFill />} component={<Link to="/dashboard" />}> Dashboard </MenuItem>
                <MenuItem icon={<FaHistory />} component={<Link to="/history" />}> History </MenuItem>
                <MenuItem icon={<FaCalendarAlt />} component={<Link to="/calendar" />}> Calendar </MenuItem>
                <MenuItem icon={<AiTwotonePlusSquare />} component={<Link to="/appointments" />}> Appointments </MenuItem>
                <MenuItem icon={<FcStatistics />} component={<Link to="/statistics" />}> Statistics </MenuItem>
            </Menu>

            <Menu iconShape="circle">
                <p className="menu-section-title">Tools</p>
                <MenuItem icon={<IoChatbubbleEllipsesOutline />}> Chat </MenuItem>
                <MenuItem icon={<FaPhoneAlt />}> Support </MenuItem>
            </Menu>

            <div className="sidebar-footer">
                <Menu iconShape="circle">
                    <MenuItem icon={<FaCog />}> Settings </MenuItem>
                </Menu>
            </div>
        </Sidebar>
    );
}

export default SidebarComponent;
