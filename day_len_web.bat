@echo off
title Cap Nhat Portfolio - Le Minh Quan
color 0A
echo =======================================================
echo   DANG DAY PORTFOLIO LEN WEB CHINH THUC (GITHUB / PAGES)
echo =======================================================
echo.
cd /d "C:\Users\quanl\Downloads\portfolio-site\portfolio-site"
git status
echo.
echo Dang thuc hien git push origin main...
git push origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo =======================================================
    echo  [HOAN THANH XUAT SAC] Website da duoc deploy thanh cong!
    echo =======================================================
) else (
    echo =======================================================
    echo  Co the can dang nhap Git hoac kiem tra ket noi mang.
    echo =======================================================
)
echo.
pause
