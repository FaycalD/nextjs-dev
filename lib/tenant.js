```javascript
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client for each tenant
const tenants = {
  tenant1: createClient(process.env.SUPABASE_URL_TENANT1, process.env.SUPABASE_ANON_KEY_TENANT1),
  tenant2: createClient(process.env.SUPABASE_URL_TENANT2, process.env.SUPABASE_ANON_KEY_TENANT2),
  // Add more tenants as needed
};

export function getTenant(tenantId) {
  const tenant = tenants[tenantId];

  if (!tenant) {
    throw new Error(`Invalid tenant ID: ${tenantId}`);
  }

  return tenant;
}
```