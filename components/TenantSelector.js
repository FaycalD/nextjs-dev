import { useState } from 'react';
import { DropdownMenu, DropdownItem } from '@radix-ui/react-dropdown-menu';
import { useAuth } from '../lib/auth';

const TenantSelector = () => {
  const { user, tenants, selectTenant } = useAuth();
  const [selectedTenant, setSelectedTenant] = useState(tenants[0]);

  const handleSelectTenant = (tenant) => {
    setSelectedTenant(tenant);
    selectTenant(tenant);
  };

  return (
    <DropdownMenu>
      <DropdownItem onSelect={() => handleSelectTenant(tenants[0])}>
        {tenants[0]}
      </DropdownItem>
      {tenants.slice(1).map((tenant, index) => (
        <DropdownItem key={index} onSelect={() => handleSelectTenant(tenant)}>
          {tenant}
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
};

export default TenantSelector;